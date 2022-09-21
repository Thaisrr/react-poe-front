import hljs from "highlight.js";
import { useEffect } from "react";
import useCopyClipboard from "react-use-clipboard";

const Code = function({children : text}) {
    const [isCopied, setCopied] = useCopyClipboard(text, {
        successDuration: 1500
    });
    useEffect(() => {
        hljs.configure({ cssSelector: 'code'})
        hljs.highlightAll();

    }, [])
    return (
        <span className={isCopied ? 'copied' : 'not-copied'}>
            <code  onClick={setCopied}>{text}</code>
        </span>
    );
        
}
export default Code