import React, {  useEffect, useState } from "react";
import Card from './Card';
import axios from "axios";

const Album = () => {

    const [item, setItem] = useState([]);
    const [timg, setTimg] = useState([]);

    const AlbumData = async () => {

        const res = await axios.get("https://rallycoding.herokuapp.com/api/music_albums");
    
        setTimg(res.data[0])
        setItem(res.data)
    }

    useEffect(() => {
        AlbumData();
    }, [])



    return (

        <>
            <div className="my-5">
                <h1 className="text-center"> Amazon prime original Music</h1><hr/>
            </div>

            <div className="container-fluid ">
                <div className=" row">
                    <div className="col-10 mx-auto">
                        <div className="container row">
                            {item ? 

                            
                                item.map((val, ind) => {
                                    return <Card key={ind} image={val.image} title={val.title} artist={val.artist} url={val.url} />
                                })
                            
                            :<div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="sr-only">Loading...</span>
                            </div>
                          </div>}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Album;
