import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  SortOrder,
  WhereGTEConditions,
  WhereHasConditions,
} from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Question } from '../entities/question.entity';

@ObjectType()
export class QuestionPaginator {
  data: Question[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetQuestionsArgs extends PaginationArgs {
  orderBy?: QueryQuestionsOrderByOrderByClause[];
  @Field(() => ID)
  shop_id?: string;

}

@InputType()
export class QueryQuestionsOrderByOrderByClause {
  column: QueryAllQuestionsOrderByColumn;
  order: SortOrder;
}

@InputType()
export class QueryQuestionsHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryQuestionsHasTypeColumn;
  AND?: QueryQuestionsHasTypeWhereHasConditions[];
  OR?: QueryQuestionsHasTypeWhereHasConditions[];
  HAS?: QueryQuestionsHasTypeWhereHasConditionsRelation;
}

@InputType()
export class QueryQuestionsHasTypeWhereHasConditionsRelation extends WhereGTEConditions {
  condition: QueryQuestionsHasTypeWhereHasConditions;
}

export enum QueryAllQuestionsOrderByColumn {
  ID='ID',
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryAllQuestionsOrderByColumn, {
  name: 'QueryAllQuestionsOrderByColumn',
});

export enum QueryQuestionsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryQuestionsHasTypeColumn, {
  name: 'QueryQuestionsHasTypeColumn',
});
