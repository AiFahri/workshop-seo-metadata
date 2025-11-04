export type Post = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: "optimasi-metadata-nextjs",
    title: "Optimasi Metadata di Next.js",
    summary: "Cara pakai metadata dan og image agar ramah SEO",
    image: "/images/thumbnail.webp",
    date: "2025-10-25",
  },
  {
    slug: "seo-dasar",
    title: "SEO Dasar Untuk Pemula",
    summary: "Cara mengoptimalkan SEO pada website anda supaya jadi yg teratas",
    image:"/images/thumbnail.webp",
    date: "2025-10-25",
  }
];  
