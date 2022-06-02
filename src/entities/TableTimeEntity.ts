import { Column, Entity } from 'typeorm';


/**
 * Table Inheritance
 * https://typeorm.io/#/entity-inheritance
 */
export abstract class TableTimeEntity {
    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP(0)',
        onUpdate: 'CURRENT_TIMESTAMP(0)',
        comment: '수정일'
    })
    ltime: Date;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP(0)',
        comment: '생성일'
    })
    rtime: Date;
}