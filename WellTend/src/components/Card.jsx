import ReactMarkdown from 'react-markdown';

function Card({ journal }) {

    const renderers = {
        h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-medium mb-2">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-semibold mb-2">{children}</h4>,
        h5: ({ children }) => <h5 className="text-base font-medium mb-1">{children}</h5>,
        h6: ({ children }) => <h6 className="text-sm font-medium mb-1">{children}</h6>,
        p: ({ children }) => <p className="mb-4">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
        li: ({ children }) => <li className="mb-1">{children}</li>,
        a: ({ children, href }) => (
            <a href={href} className="text-wing-400 hover:underline">
                {children}
            </a>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-wing-400 pl-4 italic mb-4">
                {children}
            </blockquote>
        ),
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
    };


    return (
        <div className="card">
            <ReactMarkdown components={renderers}>{journal.content}</ReactMarkdown>
        </div>
    )
}

export default Card