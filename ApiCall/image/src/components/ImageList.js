import ImageItem from './ImageItem';

// ImageList bileşeni, imagesPlaceholder dizisindeki her bir görüntü 
// öğesini ImageItem bileşeniyle eşleştirerek bir görüntü listesi oluşturuyor.
function ImageList({imagesPlaceholder}) {
    return (<div className='imageList'>
        {imagesPlaceholder.map((image,index)=>{ 
            //map ile dizi için döngü oluşturulur.
            // image ilgili nesneyi ImageItem a aktarıyor
            
            return <ImageItem key={index} image={image} />
        })}
    </div>);
}

export default ImageList;
