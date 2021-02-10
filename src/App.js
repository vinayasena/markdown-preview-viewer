import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
function App(props) {
  const [markdown, setMarkdown] = useState(`
  ## markdown preview - H2
  ###  this is a H3
>  this  is a Quote
---
#### click below link for markdown syntax cheatsheet
[cheatSheet for markdown](https://www.markdownguide.org/cheat-sheet/)
---
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
---
---
![image](https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)


  `);
  return (
    <>
      <main>
        <section className="markdown">
          <textarea
            className="input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          >
            {markdown}
          </textarea>
          <article className="result">
           <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
