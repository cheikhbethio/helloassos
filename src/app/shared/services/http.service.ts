import { Injectable } from '@angular/core';
import { listAsso } from '../datas'
import * as _ from 'underscore';
@Injectable()
export class HttpService {

  constructor() { }

  getAssosList() {
    return listAsso.map(asso => {
      return _.omit(asso, 'payments');
    });
  }
  getAsso(idAsso) {
    const associations = listAsso.filter(asso => asso.id === idAsso);
    return associations.length ? associations[0] : {};
  }
  getNbTotalPay(idAsso) {
    const associations = listAsso.filter(asso => asso.id === idAsso)
    return  associations.length && associations[0].payments? associations[0].payments.length : 0;
  }
  getPaymentsAsso(idAsso, nbPage, size) {
    const associations = listAsso.filter(asso => asso.id === idAsso);
    if (!associations.length) {
      return undefined;
    }
    const payments = associations[0].payments;
    const offset = (nbPage - 1) * size;
    return payments.slice(offset, size + offset);
  }

}
