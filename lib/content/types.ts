
export type Category = 'Algorithm' | 'Data Structure' | 'Pattern' | 'Database Concept' | 'System Design';
export type Domain = 'DSA' | 'DBA';

export interface LocalizedText {
    en: string;
    tr: string;
}

export interface LeetCodeQuestion {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  url: string;
}

export interface ContentItem {
  id: string;
  title: LocalizedText;
  category: Category;
  domain: Domain;
  summary: LocalizedText;
  descriptionStandard: LocalizedText;
  descriptionELI5: LocalizedText;
  contentMarkdown?: LocalizedText;
  realWorldUses?: LocalizedText[];
  pros?: LocalizedText[];
  cons?: LocalizedText[];
  complexity: {
    time: string;
    space: string;
  };
  codeSnippet: string;
  questions: LeetCodeQuestion[];
  level?: 'Junior' | 'Mid' | 'Senior'; // Added level field
}
