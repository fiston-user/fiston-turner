import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface SocialMediaCardProps {
  platform: "youtube" | "twitter" | "linkedin" | "instagram";
  username: string;
  url: string;
}

const iconMap = {
  youtube: FaYoutube,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  platform,
  username,
  url,
}) => {
  const Icon = iconMap[platform];

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="mr-2" />
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 dark:text-gray-400">@{username}</p>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
