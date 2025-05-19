import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import girlImage from "../assets/girl.jpg";
import { Link } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';

const CommentDialog = ({ open, setOpen }) => {
  const [text, setText] = useState("");
  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if(inputText.trim()){
      setText(inputText);
    }else{
      setText("");
    }
  }

  const sendMessageHandler = async () => {
    alert(text)
  }
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="max-w-5xl p-0 flex flex-col overflow-hidden rounded-lg shadow-lg"
      >
        <div className="flex h-[500px]"> {/* Set a fixed height to avoid collapsing */}
          {/* Left side - image */}
          <div className="w-1/2">
            <img
              className="w-full h-full object-cover"
              src={girlImage}
              alt="girlimage"
            />
          </div>
          
          {/* Right side - content */}
          <div className="w-1/2 bg-white p-4 relative">
            {/* Top-left avatar */}
            <div className="absolute top-4 left-4">
              <Link to="#">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <div>
                <Link to="#" className="font-semibold text-xs"> username </Link>
                {/* <span className='text-gray-600'>Bio here</span> */}
              </div>
            </div>
            
            {/* Options menu */}
            <div className="absolute top-4 right-4">
              <Dialog>
                <DialogTrigger asChild>
                  <MoreHorizontal className="cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="flex flex-col items-center text-sm text-center">
                  <div className="cursor-pointer w-full text-[#ED4956] font-bold">
                    Unfollow
                  </div>
                  <div className="cursor-pointer w-full">
                    Add to favourites
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <hr className="mt-16" />
            
            {/* Placeholder for future content */}
            <div className="h-64 flex items-center justify-center text-gray-400 text-sm">
              {/* Optional: Add username, comments, etc. */}
              Add content here
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-2">
                <input 
                  type="text" value={text} onChange={changeEventHandler} 
                  placeholder="Add a comment..." 
                  className="w-full outline-none border border-gray-300 p-2 rounded"
                />
                <Button disabled ={!text.trim()}onClick={sendMessageHandler} variant="outline">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDialog;





