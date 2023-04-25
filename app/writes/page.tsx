import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Write() {

  return (
    <div className="w-[840px] mx-auto mt-5">
      <div className="flex flex-row items-center">
        <div className="basis-1/4">
          Image
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col gap-6 ml-5">
            <div>Title</div>
            <div>Content</div>
            <div>Date</div>
          </div>
        </div>
      </div>
    </div>
  )
}
