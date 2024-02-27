#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HandsOnForBeginnersTranslateApiStack } from '../lib/hands-on-for-beginners-translate_api-stack';

const app = new cdk.App();
new HandsOnForBeginnersTranslateApiStack(app, 'HandsOnForBeginnersTranslateApiStack');
