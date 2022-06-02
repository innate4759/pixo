import { MaxLength, Required } from '@tsed/schema';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { TableTimeEntity } from './TableTimeEntity';
import { CategoryVO } from '../models/Categories';

@Entity()
export class Category extends TableTimeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

	@Required()
    @Column({ type: 'varchar' })
    name = '';


    toVO() {
        const {id, name} = this
        const vo: CategoryVO = {id, name}
        return vo;
    }

}