import { Component } from '@angular/core';

interface TestStep {
  title: string;
  description: string;
  order: number;
}

enum TestType {
  Unit,
  Mutation,
  Manual,
  Integration,
  Load,
  Performance,
  Acceptance,
}

interface TestCase {
  title: string;
  description: string;
  testType: TestType;
  testSteps?: TestStep[];
}

const TEST_STEPS: TestStep[] = [
  {
    title: 'abrir Chrome',
    description: 'hacer click sobre el icono de Chrome',
    order: 1,
  },
  {
    title: 'abrir Chrome',
    description: 'hacer click sobre el icono de Chrome',
    order: 2,
  },
  {
    title: 'abrir Chrome',
    description: 'hacer click sobre el icono de Chrome',
    order: 3,
  },
];
/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
  displayedColumns: string[] = ['orden', 'titulo', 'descripcion'];
  dataSource = TEST_STEPS;
}
