import { Example, Format, Property, Required } from '@tsed/schema';


export class TemplatesVO {
    @Required() @Format('uuid') id: string;
    @Required() @Example('template1') name: string;

}