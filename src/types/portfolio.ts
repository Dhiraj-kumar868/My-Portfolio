export interface PersonalDetails {
  name: string;
  titles: string[];
  primaryTitle: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
  yearsOfExperience: string;
  projectsCount: string;
  usersImpacted: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  stats: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export interface ExperienceAchievement {
  text: string;
  metric?: string | null;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'current' | 'past';
  description: string;
  achievements: ExperienceAchievement[];
  skills: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Fintech' | 'Full-Stack' | 'Mobile' | 'Enterprise';
  description: string;
  longDescription: string;
  architectureHighlights: string[];
  keyDeliverables: string[];
  technologies: Array<{
    name: string;
    proficiency: number;
    color: string;
  }>;
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  impact: string;
}

export interface SkillItem {
  name: string;
  level: number;
  category: string;
  iconName?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  honors?: string;
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'award' | 'certification' | 'scholarship';
  description: string;
  badge: string;
  pdfUrl?: string;
}

export interface HackerRankAchievement {
  title: string;
  stars: number;
  description: string;
}

export interface WhatsAppTemplate {
  id: string;
  label: string;
  message: string;
  icon?: string;
}
