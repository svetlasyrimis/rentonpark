import { stateToHTML } from "draft-js-export-html";
import { EditorState, convertFromRaw, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";

export const convertFromJSONToHTML = text => {
  return stateToHTML(convertFromRaw(text));
};

export const ljust = (word, length, char) => {
  var fill = [];
  while (fill.length + word.length < length) {
    fill[fill.length] = char;
  }
  return fill.join("") + word;
};

export const ContentToHtml = content => {
  let description = convertFromRaw(content);
  const html = stateToHTML(description);
  const contentBlock = htmlToDraft(html);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  let content_html = EditorState.createWithContent(contentState);
  return content_html;
};

export const onlyDate = date => {
  let new_date = new Date(date);
  let day = new_date.getDate().toString();
  let month = (new_date.getMonth() + 1).toString();
  let year = new_date.getFullYear();
  return ljust(day, 2, "0") + "-" + ljust(month, 2, "0") + "-" + year;
};
