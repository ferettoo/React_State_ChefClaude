import chefClaudeIcon from "/images/Chef_Claude_Icon.svg";

export default function Header() {
  return (
    <div className="blue-200 flex items-center justify-center gap-2 bg-white p-6 shadow-sm">
      <img src={chefClaudeIcon} alt="Chef Claude" className="" />
      <h1 className="text-3xl font-normal">Chef Claude</h1>
    </div>
  );
}
