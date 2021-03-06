/**
 * Created by zyy on 16/7/4.
 * zhangyuyu@superjia.com
 */
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Tag from 'antd/lib/tag';

export default class Iconfont extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {member, actions} = this.props;
    return (
      <div className={classNames({
        'member': true,
        'invite': member.iconfont.status === 'invite',
        'apply': member.iconfont.status === 'apply',
      })}>
        <Card style={{ height: 90 }}>
          <div className={
            classNames({
              'custom-card': true,
            })
          }>
            {
              member.iconfont.status === 'invite' ? <Tag color="yellow">待加入</Tag> : null
            }
            <h3>{member.username}</h3>
            <div className="operators">
              <Button type="danger" htmlType="button" onClick={() => actions.deleteMemberShow(true, member)}>删除</Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

Iconfont.propTypes = {
  member: PropTypes.object.isRequired,
}
