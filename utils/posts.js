import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export function getAllPosts() {
  const fileNames = fs.readdirSync('posts')
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

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
    .filter(fileName => !fileName.startsWith('.')) // hide hidden files
    .map(fileName => ({
      params: { id: encodeURIComponent(fileName.slice(0, -3)) }, // removes `.md`
    }))
}

export async function getPostData(id) {
  const fileContents = fs.readFileSync(
    `posts/${decodeURIComponent(id)}.md`,
    'utf8'
  )
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
