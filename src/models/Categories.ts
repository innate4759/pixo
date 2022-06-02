import { Example, Format, Property, Required } from '@tsed/schema';


export class CategoryVO {
    @Required() @Format('uuid') id: string;
    @Required() @Example('Vintage Logos') name: string;

}