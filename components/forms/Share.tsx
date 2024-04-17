"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from 'next-share'

import Image from "next/image";

interface Props {
    id: string;
}

// const Share: React.FC<ShareProps> = ({ id }) => {
const Share = ({ id }: Props) => {

    return (
        // <TooltipProvider>
        //     <Tooltip>
        //         <TooltipTrigger asChild>
        //           
        //         </TooltipTrigger>

        //         <TooltipContent className="bg-black border border-stone-800 rounded-xl py-3">
        //             <div className="flex gap-2">
        //                 <TwitterShareButton
        //                     url={`https://threads-app-psb5.vercel.app/thread/${id}`}
        //                     // title={'next-share is a social share buttons for your next React apps.'}
        //                 >
        //                     <TwitterIcon size={28} round />
        //                 </TwitterShareButton>
        //                 <WhatsappShareButton
        //                     url={`https://threads-app-psb5.vercel.app/thread/${id}`}
        //                     // title={'next-share is a social share buttons for your next React apps.'}
        //                     separator="::"
        //                 >
        //                     <WhatsappIcon size={28} round />
        //                 </WhatsappShareButton>
        //                 <FacebookShareButton
        //                     url={`https://threads-app-psb5.vercel.app/thread/${id}`}
        //                     // quote={'next-share is a social share buttons for your next React apps.'}
        //                     hashtag={'#nextshare'}
        //                 >
        //                     <FacebookIcon size={28} round />
        //                 </FacebookShareButton>
        //                 <EmailShareButton
        //                     url={`https://threads-app-psb5.vercel.app/thread/${id}`}
        //                     subject={'Next Share'}
        //                     body={`Click here https://threads-app-psb5.vercel.app/thread/${id} to explore the full thread`}
        //                 >
        //                     <EmailIcon size={28} round />
        //                 </EmailShareButton>
        //             </div>
        //         </TooltipContent>
        //     </Tooltip>
        // </TooltipProvider>
        <Popover>
            <PopoverTrigger>
                <Image
                    src='/assets/share.svg'
                    alt='share'
                    width={24}
                    height={24}
                    className='cursor-pointer object-contain'
                />
            </PopoverTrigger>
            <PopoverContent className="bg-black border border-stone-800 rounded-xl py-3 max-w-max">
                <div className="flex gap-2">
                    <TwitterShareButton
                        url={`https://threads-app-psb5.vercel.app/thread/${id}`}
                    // title={'next-share is a social share buttons for your next React apps.'}
                    >
                        <TwitterIcon size={28} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={`https://threads-app-psb5.vercel.app/thread/${id}`}
                        // title={'next-share is a social share buttons for your next React apps.'}
                        separator="::"
                    >
                        <WhatsappIcon size={28} round />
                    </WhatsappShareButton>
                    <FacebookShareButton
                        url={`https://threads-app-psb5.vercel.app/thread/${id}`}
                        // quote={'next-share is a social share buttons for your next React apps.'}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={28} round />
                    </FacebookShareButton>
                    <EmailShareButton
                        url={`https://threads-app-psb5.vercel.app/thread/${id}`}
                        subject={'Next Share'}
                        body={`Click here https://threads-app-psb5.vercel.app/thread/${id} to explore the full thread`}
                    >
                        <EmailIcon size={28} round />
                    </EmailShareButton>
                </div>
            </PopoverContent >
        </Popover >

    );
};

export default Share;
