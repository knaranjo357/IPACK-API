import {
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';

export enum CouponType {
  FIXED_COUPON = 'fixed',
  PERCENTAGE_COUPON = 'percentage',
  FREE_SHIPPING_COUPON = 'free_shipping',
  DEFAULT_COUPON = 'fixed',
}

registerEnumType(CouponType, { name: 'CouponType' });

@InputType('CouponInputType', { isAbstract: true })
@ObjectType()
export class Coupon extends CoreEntity {
  code?: string;
  description?: string;
  orders?: Order[];
  @IsEnum(CouponType)
  type?: string;
  language?: string;
  translated_languages?: string[];
  image?: Attachment;
  is_valid?: boolean;
  message?: string;
  amount?: number;
  minimum_cart_amount?: number;
  sub_total?: number;
  active_from: string;
  expire_at: string;
  target?: boolean;
  is_approve?: boolean;
  @Field(() => ID, { nullable: true })
  shop_id?: number;
  @Field(() => ID, { nullable: true })
  user_id?: number;
}
