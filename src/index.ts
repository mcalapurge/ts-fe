import DomUtils from './DomLib/DomUtils';
import Test from './TestModule/Test';

const theTest = new Test();

DomUtils.TemplateReplacer('bacon', theTest);
