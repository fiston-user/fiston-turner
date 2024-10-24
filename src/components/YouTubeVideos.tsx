/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  viewCount: string;
}

const YouTubeVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const CHANNEL_ID = "UC8ULQ0ZttoPsQY0H6Cwq2Ug"; // Replace with your actual YouTube channel ID
      const MAX_RESULTS = 4; // Number of videos to display

      try {
        // Fetch video snippets
        const snippetResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`
        );

        if (!snippetResponse.ok) {
          throw new Error("Failed to fetch YouTube videos");
        }

        const snippetData = await snippetResponse.json();
        const videoIds = snippetData.items
          .map((item: any) => item.id.videoId)
          .join(",");

        // Fetch video statistics
        const statsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=statistics`
        );

        if (!statsResponse.ok) {
          throw new Error("Failed to fetch video statistics");
        }

        const statsData = await statsResponse.json();

        // Combine snippet and stats data
        const fetchedVideos = snippetData.items.map(
          (item: any, index: number) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            viewCount: statsData.items[index].statistics.viewCount,
          })
        );

        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Content I Produce</h2>
      <div className="grid gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <Card key={video.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                {/* <FaYoutube className="mr-2 text-red-600" /> */}
                <Link
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline line-clamp-2"
                >
                  {video.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex-grow">
              <Link
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={320}
                  height={180}
                  className="w-full h-auto object-cover rounded-md"
                />
              </Link>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 dark:text-gray-400">
              <FaEye className="mr-1" />
              {parseInt(video.viewCount).toLocaleString()} views
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
