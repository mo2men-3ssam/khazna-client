import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      code: 'PRD-001',
      name: 'لابتوب ديل كور إي سفن',
      category: 'إلكترونيات',
      quantity: 15,
    },
    {
      code: 'PRD-002',
      name: 'شاشة سامسونج 27 بوصة',
      category: 'شاشات',
      quantity: 8,
    },
    {
      code: 'PRD-003',
      name: 'ماوس لاسلكي لوجيتك',
      category: 'إكسسوارات',
      quantity: 45,
    },
    {
      code: 'PRD-004',
      name: 'لوحة مفاتيح ميكانيكية',
      category: 'إكسسوارات',
      quantity: 20,
    },
    {
      code: 'PRD-005',
      name: 'طابعة اتش بي متعددة الوظائف',
      category: 'طابعات',
      quantity: 5,
    },
  ];

  visible: boolean = false;

  categories = ['فواكه', 'خضروات', 'عصائر', 'الكترونيات'];

  showDialog() {
    this.visible = true;
  }
}
