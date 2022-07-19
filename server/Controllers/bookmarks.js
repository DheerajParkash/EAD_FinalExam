const bookmark=require('../model/useSchema')

const getBookMarks=async (req,res)=>{
    try {
        const bookmarks=await bookmark.find();
        res.status(201).json(bookmarks); 
        console.log(bookmarks);
    } catch (error) {
        res.status(422).json(error)
    }
}

const addBookMark=async (req,res)=>{
    const{url}=req.body;
    
    if(!url){
        res.status(422).json(" Pls fill the data"+req.body);
    }
    try{
        const prebookmark= await bookmark.findOne({url:url});
        console.log(prebookmark);

        if(prebookmark){
            res.status(404).json(" this user is already registered")
        }else{
            const domainName = (new URL(url)).hostname.replace('www.','');
            const name=domainName.split('.')[0]
            const firstLetter=domainName[0];
            const visits=0;
           
            const addBookmark= new bookmark({url,domainName,name,firstLetter,visits});
        
            await addBookmark.save()
            res.status(201).json(addBookmark);
            console.log(addBookmark)    
        }

    }catch(error){
        res.status(422).json(" sometinf")
    }
}


module.exports={getBookMarks,addBookMark,SearchBookMark,deleteBookMark}