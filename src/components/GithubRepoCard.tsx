import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface GithubRepoCardProps {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
}

const GithubRepoCard: React.FC<GithubRepoCardProps> = ({
  name,
  description,
  url,
  stars,
  language,
}) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FaGithub className="mr-2" />
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {name}
          </Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{language}</span>
          <span>⭐ {stars}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GithubRepoCard;
