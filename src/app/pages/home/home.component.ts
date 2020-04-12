import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url= null;
  albums = [];
  private album = [{
    id:1,
    url:'../../assets/images/gallery_2.jpeg' 
  },
  {
    id:2,
    url:'../../assets/images/gallery_1.jpeg'  
  },
  {
    id:2,
    url:'../../assets/images/gallery_4.jpeg' 
  },
  {
    id:3,
    url:'../../assets/images/gallery_5.jpeg'  
  },
  {
    id:4,
    url:'../../assets/images/gallery_6.jpeg'  
  }

];


constructor(private _lightbox: Lightbox) { }

  ngOnInit(): void {
    this.album.map((item) => {
      
      const album = {
        src: item.url,
        // caption: "caption",
        thumb: item.url
     };

     this.albums.push(album);

    }
    
    )

  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    center: false,
    dots: false,
    margin: 30,
    navSpeed: 700,
    autoWidth:true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
}
