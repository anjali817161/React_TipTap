import { useState } from "react";
import TipTap from "../TipTap";
import ShowPost from "../ShowPost";

const NewPost = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const handleEditorContentSave = (html) => {
    setHtmlContent(html); // Save the editor content
  };

  return (
    <div className="new-post-container">
      {/* Editor */}
      <TipTap onEditorContentSave={handleEditorContentSave} />

      <hr className="my-4 border-zinc-400" />

      {/* Preview */}
      {htmlContent && (
        <div className="preview-section">
          <h2 className="text-zinc-300 text-lg mb-4">Preview:</h2>
          <ShowPost content={htmlContent} />
        </div>
      )}
    </div>
  );
};

export default NewPost;
