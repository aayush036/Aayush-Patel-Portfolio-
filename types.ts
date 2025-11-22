export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string; // Optional preview image
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface Skill {
  name: string;
  iconClass: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  about: {
    text: string[]; // Array of paragraphs
    profileImage: string;
  };
  skills: Skill[];
  resumeUrl: string;
  email: string;
  socials: SocialLink[];
}