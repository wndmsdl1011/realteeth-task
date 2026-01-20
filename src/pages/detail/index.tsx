import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">상세 페이지</h1>
      <p className="text-muted">place id: {id}</p>
    </div>
  );
}