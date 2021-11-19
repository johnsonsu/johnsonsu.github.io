import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

function parseFileNameToId(fileName) {
  return encodeURIComponent(fileName.replace(/\.md$/, ''))
}

export function getAllPosts() {
  const fileNames = fs.readdirSync('posts')
  const allPostsData = fileNames
    .filter(fileName => !fileName.startsWith('.'))
    .map(fileName => {
      const id = parseFileNameToId(fileName)

      const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')

      const matterResult = matter(fileContents)

      return {
        id,
        ...matterResult.data,
      }
    })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync('posts')

  return fileNames
    .filter(fileName => !fileName.startsWith('.'))
    .map(fileName => ({
      params: { id: parseFileNameToId(fileName) },
    }))
}

export async function getPostData(id) {
  const fileContents = fs.readFileSync(`posts/${id}.md`, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
