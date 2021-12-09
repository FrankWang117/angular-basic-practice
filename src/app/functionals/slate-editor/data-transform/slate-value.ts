import { Element } from 'slate';
export const SLATE_VALUE_FORMAT = `
[
    {
       "type": "paragraph",
       "children": [
          {
             "text": "Pull Request已创建，请相关人员前往Review。"
          }
       ]
    },
    {
       "type": "paragraph",
       "children": [
          {
             "text": "评审人： "
          },
          {
             "type": "dynamic",
             "data": {
                "rule_step_id": "61b1af1c1dc2f8c521aca578",
                "rule_step_identifier": "S-7",
                "property_text": "查找到的成员合集",
                "property_name": "uids"
             },
             "children": [
                {
                   "text": ""
                }
             ]
          }
       ]
    },
    {
       "type": "paragraph",
       "children": [
          {
             "text": "地址： "
          },
          {
             "type": "dynamic",
             "data": {
                "rule_step_id": "61b1af1c1dc2f8c521aca572",
                "rule_step_identifier": "S-1",
                "property_text": "Pull Request 显示地址",
                "property_name": "pull_request_html_url"
             },
             "children": [
                {
                   "text": ""
                }
             ]
          }
       ]
    },
    {
       "type": "paragraph",
       "children": [
          {
             "text": "标题： "
          },
          {
             "type": "dynamic",
             "data": {
                "rule_step_id": "61b1af1c1dc2f8c521aca572",
                "rule_step_identifier": "S-1",
                "property_text": "Pull Request 标题",
                "property_name": "pull_request_title"
             },
             "children": [
                {
                   "text": ""
                }
             ]
          }
       ]
    },
    {
       "type": "paragraph",
       "children": [
          {
             "text": "创建时间："
          },
          {
             "type": "dynamic",
             "data": {
                "rule_step_id": "000000000000000000000000",
                "rule_step_identifier": "",
                "property_text": "当前时间",
                "property_name": "now"
             },
             "children": [
                {
                   "text": ""
                }
             ]
          }
       ]
    }
 ]`;

export const SLATE_VALUE: Element[] = [
    {
        type: 'paragraph',
        children: [{ text: 'Pull Request已创建，请相关人员前往Review。' }],
    },
    {
        type: 'paragraph',
        children: [
            { text: '评审人：' },
            {
                type: 'dynamic',
                data: {
                    rule_step_id: '61b1af1c1dc2f8c521aca578',
                    rule_step_identifier: 'S-7',
                    property_text: '查找到的成员合集',
                    property_name: 'uids',
                },
                children: [{ text: '' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            { text: '地址：' },
            {
                type: 'dynamic',
                data: {
                    rule_step_id: '61b1af1c1dc2f8c521aca572',
                    rule_step_identifier: 'S-1',
                    property_text: 'Pull Request 显示地址',
                    property_name: 'pull_request_html_url',
                },
                children: [{ text: '' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            { text: '标题：' },
            {
                type: 'dynamic',
                data: {
                    rule_step_id: '61b1af1c1dc2f8c521aca572',
                    rule_step_identifier: 'S-1',
                    property_text: 'Pull Request 标题',
                    property_name: 'pull_request_title',
                },
                children: [{ text: '' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            { text: '创建时间：' },
            {
                type: 'dynamic',
                data: {
                    rule_step_id: '000000000000000000000000',
                    rule_step_identifier: '',
                    property_text: '当前时间',
                    property_name: 'now',
                },
                children: [{ text: '' }],
            },
        ],
    },
];
