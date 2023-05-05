import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

const TEST_CASES: TestCase[] = [
  {
    title: 'Test de login',
    description: 'hacer click sobre el icono de Chrome',
    testType: TestType.Acceptance,
  },
  {
    title: 'Test de Performance',
    description: 'hacer click sobre el icono de Chrome',
    testType: TestType.Acceptance,
  },
  {
    title: 'Test de Validacion',
    description: 'hacer click sobre el icono de Chrome',
    testType: TestType.Acceptance,
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
  tests = TEST_CASES;
  drop(event: CdkDragDrop<TestCase[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
  }
}
