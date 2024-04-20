import Image from 'next/image'
import clsx from 'clsx'
import { Badge } from './ui/badge'
import { CodeIcon, LinkIcon } from 'lucide-react'
import { data } from '@/constants'

export function Projects() {
  const { projects } = data

  return (
    <>
      <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <CodeIcon className='size-6' />
        Projects
      </h2>

      <div className='flex flex-col gap-y-8'>
        {projects.map(
          ({ title, description, tags, image, video, link }, index) => (
            <div key={index}>
              <article>
                <a href={link.github} target='_blank' rel='noopener noreferrer'>
                  <h3 className='flex items-center gap-x-2 text-xl md:text-2xl font-semibold mb-4 ml-1.5'>
                    <LinkIcon className='size-6' />
                    <span className='text-neutral-100 hover:underline'>
                      {title}
                    </span>
                  </h3>
                </a>
                <div className='ml-10'>
                  <p className='text-base md:text-lg mb-6 text-pretty'>
                    {description}
                  </p>
                  <div
                    className={clsx('flex flex-col', {
                      'gap-6': image ?? video
                    })}
                  >
                    <ul className='md:flex md:overflow-x-auto md:whitespace-nowrap md:pb-6 pb-2 grid grid-cols-2 md:gap-x-4 gap-x-0 gap-4 items-center justify-items-start'>
                      {tags.map((tag, index) => (
                        <li key={index}>
                          <Badge className='shadow'>
                            <tag.icon className='size-4' />
                            <p className='hidden md:block'>{tag.name}</p>
                          </Badge>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={link.github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {image && (
                        <Image
                          className='rounded-xl shadow border'
                          width={1920}
                          height={1280}
                          src={image}
                          alt={title}
                        />
                      )}
                      {video && (
                        <video
                          className='rounded-xl shadow border'
                          width={1920}
                          height={1280}
                          controls
                          muted
                          autoPlay
                          loop
                        >
                          <source src={video} type='video/webm' />
                        </video>
                      )}
                    </a>
                  </div>
                </div>
              </article>
              {index < projects.length - 1 && (
                <div key={index} className='border-b pb-16 ml-2' />
              )}
            </div>
          )
        )}
      </div>
    </>
  )
}
