export interface GuestbookEntry {
  id: string
  nickname: string
  content: string
  timestamp: Date
}

export const guestbookData = {
  title: '留言板',
  description: '欢迎留下你的足迹！',
  placeholder: {
    nickname: '你的昵称',
    content: '说点什么吧...'
  },
  submitButton: '发送留言',
  initialEntries: [
    {
      id: '1',
      nickname: '访客小明',
      content: '这个主页做得真不错！',
      timestamp: new Date(Date.now() - 86400000)
    },
    {
      id: '2',
      nickname: '技术爱好者',
      content: '加油，继续努力！',
      timestamp: new Date(Date.now() - 172800000)
    }
  ] as GuestbookEntry[]
}
