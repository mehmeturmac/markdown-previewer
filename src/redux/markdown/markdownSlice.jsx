import { createSlice } from '@reduxjs/toolkit';

const defaultText = `# HEADING
## Heading

### Sub-heading

---

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Text attributes *italic*, **bold**, ~~strikethrough~~ .

---

* Lists:
* [ ] todo 
* [x] done 
               
A table:
| a | b |
| - | - |

---
       
Shopping list-1:
- apples
- oranges
- pears

Numbered list-2:
1. apples
2. oranges
3. pears

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const markdownSlice = createSlice({
  name: 'markdown',
  initialState: {
    markdownText: '',
    defaultText,
  },
  reducers: {
    setMarkdownText: (state, action) => {
      state.markdownText = action.payload;
    },
    setDefaultText: (state) => {
      state.markdownText = state.defaultText;
    },
  },
});

export const { setMarkdownText, setDefaultText } = markdownSlice.actions;
export default markdownSlice.reducer;
