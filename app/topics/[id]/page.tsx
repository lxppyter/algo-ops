import { contentData } from "@/lib/content"
import { TopicDetailView } from "@/components/topic-detail-view"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return contentData.map((item) => ({
    id: item.id,
  }))
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = contentData.find(c => c.id === id)
  
  if (!item) notFound()
  
  return <TopicDetailView item={item} />
}
