import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import {motion, scale} from 'framer-motion'

export default function Card({data,refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className='relative w-60 h-72 bg-zinc-900 rounded-[45px] px-8 pt-10 text-white overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm font-semibold leading-5 mt-3'>{data.desc}</p>
      
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='flex justify-between items-center px-8 pb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-8 h-8 rounded-full bg-zinc-700 flex justify-center items-center'>
            {data.close ? <IoIosCloseCircle size="1em" color='white' /> 
                : <MdOutlineFileDownload size="1em" color='white' />
            }
          </span>
        </div>
        {data.tag.isOpen &&(
            <div className={`w-full py-2 ${data.tag.tagColor === "blue" ? 'bg-blue-600' : 'bg-green-600'} text-center text-white font-medium`}>
                    {data.tag.tagTittle}
            </div>
        )}
        
      </div>
    </motion.div>
  );
}