import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function MarkdownRenderer({ children }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ inline, className = '', children: codeChildren, ...props }) {
          const match = /language-(\w+)/.exec(className);
          if (inline || !match) {
            return (
              <code className="bg-gray-100 rounded px-1 py-0.5" {...props}>
                {codeChildren}
              </code>
            );
          }
          const language = match ? match[1] : "text";
          return (
            <Prism
              style={dracula}
              PreTag="div"
              language={language}
              {...props}
            >
              {String(codeChildren).replace(/\n$/, "")}
            </Prism>
          );
        },
        h1: ({ ...props }) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
        h2: ({ ...props }) => <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />,
        h3: ({ ...props }) => <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
        h4: ({ ...props }) => <h4 className="text-xl font-semibold mt-3 mb-2" {...props} />,
        h5: ({ ...props }) => <h5 className="text-lg font-semibold mt-2 mb-1" {...props} />,
        h6: ({ ...props }) => <h6 className="text-base font-semibold mt-1 mb-1" {...props} />,
        ul: ({ children, ...props }) => (
          <ul className="list-disc pl-6 mb-4" {...props}>{children}</ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="list-decimal pl-6 mb-4" {...props}>{children}</ol>
        ),
        li: ({ children, ...props }) => (
          <li className="mb-1" {...props}>{children}</li>
        ),
        a: ({ href, children, ...props }) => (
          <a
            href={href}
            className="text-gray-600 hover:underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4"
            {...props}
          >
            {children}
          </blockquote>
        ),
      }}
    >
      {children}
    </Markdown>
  );
}