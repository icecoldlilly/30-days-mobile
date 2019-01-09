import Vue from 'vue';
import Amplify from 'aws-amplify';
import aws_exports from '@/aws-exports.js';


Amplify.configure(aws_exports);




import { AmplifyPlugin } from 'aws-amplify-vue';
import * as AmplifyModules from 'aws-amplify';

Vue.use(AmplifyPlugin, AmplifyModules);