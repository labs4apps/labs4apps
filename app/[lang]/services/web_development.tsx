import { title } from "@/components/primitives";

export default function WebDevelopmentPage() {
  return (
    <div>
      <h1 className={title()}>Web development</h1>
      <div>
        <ul>
            <li>Websites</li>
            <li>Design systems</li>
            <li>CMS</li>
        </ul>
      </div>
    </div>
  );
}
