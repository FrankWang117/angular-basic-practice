export const FLOW_VALUE_FORMAT = `
[
    {
       "ref_type": "static",
       "ref_value": "Pull Request已创建，请相关人员前往Review。"
    },
    {
       "ref_type": "static",
       "ref_value": "\\n"
    },
    {
       "ref_type": "static",
       "ref_value": "评审人： "
    },
    {
       "ref_type": "dynamic",
       "ref_value": {
          "rule_step_id": "61b1af1c1dc2f8c521aca578",
          "property_name": "uids"
       }
    },
    {
       "ref_type": "static",
       "ref_value": " "
    },
    {
       "ref_type": "static",
       "ref_value": "\\n"
    },
    {
       "ref_type": "static",
       "ref_value": "地址： "
    },
    {
       "ref_type": "dynamic",
       "ref_value": {
          "rule_step_id": "61b1af1c1dc2f8c521aca572",
          "property_name": "pull_request_html_url"
       }
    },
    {
       "ref_type": "static",
       "ref_value": " "
    },
    {
       "ref_type": "static",
       "ref_value": "\\n"
    },
    {
       "ref_type": "static",
       "ref_value": "标题： "
    },
    {
       "ref_type": "dynamic",
       "ref_value": {
          "rule_step_id": "61b1af1c1dc2f8c521aca572",
          "property_name": "pull_request_title"
       }
    },
    {
       "ref_type": "static",
       "ref_value": " "
    },
    {
       "ref_type": "static",
       "ref_value": "\\n"
    },
    {
       "ref_type": "static",
       "ref_value": "创建时间："
    },
    {
       "ref_type": "dynamic",
       "ref_value": {
          "rule_step_id": "000000000000000000000000",
          "property_name": "now"
       }
    },
    {
       "ref_type": "static",
       "ref_value": "\\n"
    }
 ]
`;

export const FLOW_VALUE = [
    {
        ref_type: 'static',
        ref_value: 'Pull Request已创建，请相关人员前往Review。',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '评审人： ',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '61b1af1c1dc2f8c521aca578',
            property_name: 'uids',
        },
    },
    {
        ref_type: 'static',
        ref_value: ' ',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '地址： ',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '61b1af1c1dc2f8c521aca572',
            property_name: 'pull_request_html_url',
        },
    },
    {
        ref_type: 'static',
        ref_value: ' ',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '标题： ',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '61b1af1c1dc2f8c521aca572',
            property_name: 'pull_request_title',
        },
    },
    {
        ref_type: 'static',
        ref_value: ' ',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '创建时间：',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '000000000000000000000000',
            property_name: 'now',
        },
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
];
