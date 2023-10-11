


function ShowImage(){
    function zoom(e){
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('img01');
        var captionText = document.getElementById('caption');
        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    }
    function offZoom(){
        var modal = document.getElementById('myModal');
        modal.style.display = "none"

    }


    return(<>
        <div className='row image-item'>
      <p className='col-md-4 col-6 col-sm-6 col-lg-4 col-xl-2 col-xxl-2 image-item-zoom'>
        <img onClick={(e)=>{zoom(e)}} id="myImg" src='//bizweb.dktcdn.net/thumb/large/100/244/305/themes/895013/assets/al1.png?1676340930397' />
        <button className="image-item-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
        </svg></button>
      </p>
      <p className='col-md-4 col-6 col-sm-6 col-lg-4 col-xl-2 col-xxl-2  image-item-zoom'>
          <img onClick={(e)=>{zoom(e)}} src='//bizweb.dktcdn.net/thumb/large/100/244/305/themes/895013/assets/al2.png?1676340930397' />
      <button className="image-item-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
        </svg></button>
      </p>
      <p className='col-md-4 col-6 col-sm-6 col-lg-4 col-xl-2 col-xxl-2  image-item-zoom'>
        <img onClick={(e)=>{zoom(e)}} src='//bizweb.dktcdn.net/thumb/large/100/244/305/themes/895013/assets/al3.png?1676340930397' />
      <button className="image-item-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
        </svg></button>
      </p>
      <p className='col-md-4 col-6 col-sm-6 col-lg-4 col-xl-2 col-xxl-2  image-item-zoom'>
          <img onClick={(e)=>{zoom(e)}} src='//bizweb.dktcdn.net/thumb/large/100/244/305/themes/895013/assets/al4.png?1676340930397' />
      <button className="image-item-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
        </svg></button>
      </p>
      <p className='col-md-4 col-6 col-sm-6 col-lg-4 col-xl-2 col-xxl-2  image-item-zoom'>
          <img onClick={(e)=>{zoom(e)}} src='//bizweb.dktcdn.net/thumb/large/100/244/305/themes/895013/assets/al5.png?1676340930397' />
      <button className="image-item-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
        </svg></button>
      </p>
      <p className='col-md-4 col-6 col-sm-6 col-lg-4 col-xl-2 col-xxl-2  image-item-zoom'>
          <img onClick={(e)=>{zoom(e)}} src='//bizweb.dktcdn.net/thumb/large/100/244/305/themes/895013/assets/al6.png?1676340930397' />
      <button className="image-item-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
        </svg></button>
      </p>

    </div>
    <div id="myModal" className="modal-item">
        <span className="close" onClick={offZoom} >x</span>
        <img className="modal-content" id="img01" />
        <div id="caption" ></div>
    </div>
    
    </>)
}
export default ShowImage