import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

  bookOrderRef: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    
  }

  createBookOrder(data) {
    this.bookOrderRef = this.db.list('bookOrder');
    this.bookOrderRef.push(data);
    this.sendEmail(data).subscribe();
  }

  listOrder() {
    return this.db.list<any>('bookOrder').valueChanges();
  }

  feedback(data) {
    this.bookOrderRef = this.db.list('feedback');
    this.bookOrderRef.push(data);
  }

  getOrders(){
    return this.db.list<any>('bookOrder').valueChanges();
  }

  sendEmail(email) {
    return this.http.post('https://www.uphillchampion.ch/mtg/sendMail', email);
  }

  sendEmail2(email) {
    return this.http.post('./backend/api/sendMail2', email);
  }

  downloadFile(data, filename='data') {
    let csvData = this.ConvertToCSV(data, ['address','city', 'email', 'name', 'prename','zip','order']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

ConvertToCSV(objArray, headerList) {
     let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = 'S.No,';

     for (let index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i+1)+'';
         for (let index in headerList) {
            let head = headerList[index];
              if(head!='order'){
                line += ',' + array[i]['address'][head];
              }
             
         }
         line += ',' + array[i]['order']['numberOfBookOrders']
         str += line + '\r\n';
     }
     return str;
 }
}
