import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.scss']
})
export class CategoryCardsComponent implements OnInit {
  @Input() catDetail: any;
  public iconList = [
    { type: "xlsx", icon: "fa fa-file-excel-o green-excel" },
    { type: "xls", icon: "fa fa-file-excel-o green-excel" },
    { type: "pdf", icon: "fa fa-file-pdf-o red-pdf" },
    { type: "doc", icon: "fa fa-file-word-o blue-word" },
    { type: "docx", icon: "fa fa-file-word-o blue-word" },
    { type: "ppt", icon: "fa fa-file-powerpoint-o orange-ppt" },
    { type: "pptx", icon: "fa fa-file-powerpoint-o orange-ppt" },
    { type: "txt", icon: "fa fa-file-text"}
  ];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  loadImage(imgSrc: string) {
    return this.apiService.imgUrl(imgSrc);
  }

  getFileExtension(filename: string) {
    if(filename !== undefined && filename !== null) {
      let ext = filename.split(".").pop();
      let obj = this.iconList.filter(row => {
        if (row.type === ext) {
          return true;
        } else {
          return false;
        }
      });
      if (obj.length > 0) {
        let type = obj[0].type;
        return type;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }

}
