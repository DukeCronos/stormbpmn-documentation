import comp from "C:/Users/kotov/stormbpmn-documentation/docs/.vuepress/.temp/pages/how-to/index.html.vue"
const data = JSON.parse("{\"path\":\"/how-to/\",\"title\":\"Как ... ?\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"how-to/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
