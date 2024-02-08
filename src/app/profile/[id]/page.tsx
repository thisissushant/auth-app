export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-300">
      <h1>User Profile</h1>
      <span>{params.id}</span>
    </div>
  );
}
