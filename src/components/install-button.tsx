import { ExternalIcon } from "@/components/visuals";

type InstallButtonProps = {
  githubUrl: string;
};

export function InstallButton({ githubUrl }: InstallButtonProps) {
  return (
    <div className="install-action-block">
      <div className="install-action-row">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-action"
        >
          <ExternalIcon /> GitHub で見る
        </a>
      </div>
    </div>
  );
}
