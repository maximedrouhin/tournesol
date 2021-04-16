/**
 * Tournesol API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DegreeOfPoliticalEngagementEnum from './DegreeOfPoliticalEngagementEnum';
import GenderEnum from './GenderEnum';
import MoralPhilosophyEnum from './MoralPhilosophyEnum';
import NationalityEnum from './NationalityEnum';
import PatchedDegree from './PatchedDegree';
import PatchedExpertise from './PatchedExpertise';
import PatchedExpertiseKeyword from './PatchedExpertiseKeyword';
import PatchedVerifiableEmail from './PatchedVerifiableEmail';
import PoliticalAffiliationEnum from './PoliticalAffiliationEnum';
import RaceEnum from './RaceEnum';
import ReligionEnum from './ReligionEnum';
import ResidenceEnum from './ResidenceEnum';

/**
 * The PatchedUserInformationPublicSerializerV2 model module.
 * @module model/PatchedUserInformationPublicSerializerV2
 * @version 2.0.0
 */
class PatchedUserInformationPublicSerializerV2 {
    /**
     * Constructs a new <code>PatchedUserInformationPublicSerializerV2</code>.
     * User Profile
     * @alias module:model/PatchedUserInformationPublicSerializerV2
     */
    constructor() { 
        
        PatchedUserInformationPublicSerializerV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedUserInformationPublicSerializerV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedUserInformationPublicSerializerV2} obj Optional instance to populate.
     * @return {module:model/PatchedUserInformationPublicSerializerV2} The populated <code>PatchedUserInformationPublicSerializerV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedUserInformationPublicSerializerV2();

            if (data.hasOwnProperty('title_userprofile')) {
                obj['title_userprofile'] = ApiClient.convertToType(data['title_userprofile'], 'String');
            }
            if (data.hasOwnProperty('show_my_profile')) {
                obj['show_my_profile'] = ApiClient.convertToType(data['show_my_profile'], 'Boolean');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('comment_anonymously')) {
                obj['comment_anonymously'] = ApiClient.convertToType(data['comment_anonymously'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('n_ratings')) {
                obj['n_ratings'] = ApiClient.convertToType(data['n_ratings'], 'Number');
            }
            if (data.hasOwnProperty('n_videos')) {
                obj['n_videos'] = ApiClient.convertToType(data['n_videos'], 'Number');
            }
            if (data.hasOwnProperty('n_comments')) {
                obj['n_comments'] = ApiClient.convertToType(data['n_comments'], 'Number');
            }
            if (data.hasOwnProperty('n_likes')) {
                obj['n_likes'] = ApiClient.convertToType(data['n_likes'], 'Number');
            }
            if (data.hasOwnProperty('n_thanks_given')) {
                obj['n_thanks_given'] = ApiClient.convertToType(data['n_thanks_given'], 'Number');
            }
            if (data.hasOwnProperty('n_thanks_received')) {
                obj['n_thanks_received'] = ApiClient.convertToType(data['n_thanks_received'], 'Number');
            }
            if (data.hasOwnProperty('n_mentions')) {
                obj['n_mentions'] = ApiClient.convertToType(data['n_mentions'], 'Number');
            }
            if (data.hasOwnProperty('n_public_videos')) {
                obj['n_public_videos'] = ApiClient.convertToType(data['n_public_videos'], 'Number');
            }
            if (data.hasOwnProperty('title_email')) {
                obj['title_email'] = ApiClient.convertToType(data['title_email'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], [PatchedVerifiableEmail]);
            }
            if (data.hasOwnProperty('is_certified')) {
                obj['is_certified'] = ApiClient.convertToType(data['is_certified'], 'Boolean');
            }
            if (data.hasOwnProperty('is_domain_rejected')) {
                obj['is_domain_rejected'] = ApiClient.convertToType(data['is_domain_rejected'], 'Boolean');
            }
            if (data.hasOwnProperty('certified_email_domain')) {
                obj['certified_email_domain'] = ApiClient.convertToType(data['certified_email_domain'], 'String');
            }
            if (data.hasOwnProperty('title_degree')) {
                obj['title_degree'] = ApiClient.convertToType(data['title_degree'], 'String');
            }
            if (data.hasOwnProperty('degrees')) {
                obj['degrees'] = ApiClient.convertToType(data['degrees'], [PatchedDegree]);
            }
            if (data.hasOwnProperty('title_expertise')) {
                obj['title_expertise'] = ApiClient.convertToType(data['title_expertise'], 'String');
            }
            if (data.hasOwnProperty('expertises')) {
                obj['expertises'] = ApiClient.convertToType(data['expertises'], [PatchedExpertise]);
            }
            if (data.hasOwnProperty('title_expertise_keywords')) {
                obj['title_expertise_keywords'] = ApiClient.convertToType(data['title_expertise_keywords'], 'String');
            }
            if (data.hasOwnProperty('expertise_keywords')) {
                obj['expertise_keywords'] = ApiClient.convertToType(data['expertise_keywords'], [PatchedExpertiseKeyword]);
            }
            if (data.hasOwnProperty('title_demographic')) {
                obj['title_demographic'] = ApiClient.convertToType(data['title_demographic'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], GenderEnum);
            }
            if (data.hasOwnProperty('birth_year')) {
                obj['birth_year'] = ApiClient.convertToType(data['birth_year'], 'Number');
            }
            if (data.hasOwnProperty('nationality')) {
                obj['nationality'] = ApiClient.convertToType(data['nationality'], NationalityEnum);
            }
            if (data.hasOwnProperty('residence')) {
                obj['residence'] = ApiClient.convertToType(data['residence'], ResidenceEnum);
            }
            if (data.hasOwnProperty('race')) {
                obj['race'] = ApiClient.convertToType(data['race'], RaceEnum);
            }
            if (data.hasOwnProperty('political_affiliation')) {
                obj['political_affiliation'] = ApiClient.convertToType(data['political_affiliation'], PoliticalAffiliationEnum);
            }
            if (data.hasOwnProperty('degree_of_political_engagement')) {
                obj['degree_of_political_engagement'] = ApiClient.convertToType(data['degree_of_political_engagement'], DegreeOfPoliticalEngagementEnum);
            }
            if (data.hasOwnProperty('religion')) {
                obj['religion'] = ApiClient.convertToType(data['religion'], ReligionEnum);
            }
            if (data.hasOwnProperty('moral_philosophy')) {
                obj['moral_philosophy'] = ApiClient.convertToType(data['moral_philosophy'], MoralPhilosophyEnum);
            }
            if (data.hasOwnProperty('title_online')) {
                obj['title_online'] = ApiClient.convertToType(data['title_online'], 'String');
            }
            if (data.hasOwnProperty('show_online_presence')) {
                obj['show_online_presence'] = ApiClient.convertToType(data['show_online_presence'], 'Boolean');
            }
            if (data.hasOwnProperty('google_scholar')) {
                obj['google_scholar'] = ApiClient.convertToType(data['google_scholar'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('linkedin')) {
                obj['linkedin'] = ApiClient.convertToType(data['linkedin'], 'String');
            }
            if (data.hasOwnProperty('orcid')) {
                obj['orcid'] = ApiClient.convertToType(data['orcid'], 'String');
            }
            if (data.hasOwnProperty('twitter')) {
                obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
            }
            if (data.hasOwnProperty('researchgate')) {
                obj['researchgate'] = ApiClient.convertToType(data['researchgate'], 'String');
            }
            if (data.hasOwnProperty('youtube')) {
                obj['youtube'] = ApiClient.convertToType(data['youtube'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} title_userprofile
 */
PatchedUserInformationPublicSerializerV2.prototype['title_userprofile'] = undefined;

/**
 * Show my profile on Tournesol
 * @member {Boolean} show_my_profile
 */
PatchedUserInformationPublicSerializerV2.prototype['show_my_profile'] = undefined;

/**
 * Profile picture
 * @member {String} avatar
 */
PatchedUserInformationPublicSerializerV2.prototype['avatar'] = undefined;

/**
 * First name
 * @member {String} first_name
 */
PatchedUserInformationPublicSerializerV2.prototype['first_name'] = undefined;

/**
 * Last name
 * @member {String} last_name
 */
PatchedUserInformationPublicSerializerV2.prototype['last_name'] = undefined;

/**
 * By default, comment anonymously
 * @member {Boolean} comment_anonymously
 */
PatchedUserInformationPublicSerializerV2.prototype['comment_anonymously'] = undefined;

/**
 * Your position
 * @member {String} title
 */
PatchedUserInformationPublicSerializerV2.prototype['title'] = undefined;

/**
 * Self-description (degree, biography, ...)
 * @member {String} bio
 */
PatchedUserInformationPublicSerializerV2.prototype['bio'] = undefined;

/**
 * @member {Number} id
 */
PatchedUserInformationPublicSerializerV2.prototype['id'] = undefined;

/**
 * Username
 * @member {String} username
 */
PatchedUserInformationPublicSerializerV2.prototype['username'] = undefined;

/**
 * Number of ratings
 * @member {Number} n_ratings
 */
PatchedUserInformationPublicSerializerV2.prototype['n_ratings'] = undefined;

/**
 * Number of rated videos
 * @member {Number} n_videos
 */
PatchedUserInformationPublicSerializerV2.prototype['n_videos'] = undefined;

/**
 * Number of comments left
 * @member {Number} n_comments
 */
PatchedUserInformationPublicSerializerV2.prototype['n_comments'] = undefined;

/**
 * Number of likes minus number of dislikes for comments
 * @member {Number} n_likes
 */
PatchedUserInformationPublicSerializerV2.prototype['n_likes'] = undefined;

/**
 * Number of thank you for recommendations given
 * @member {Number} n_thanks_given
 */
PatchedUserInformationPublicSerializerV2.prototype['n_thanks_given'] = undefined;

/**
 * Number of thank you for recommendations received
 * @member {Number} n_thanks_received
 */
PatchedUserInformationPublicSerializerV2.prototype['n_thanks_received'] = undefined;

/**
 * Number of mentions in comments
 * @member {Number} n_mentions
 */
PatchedUserInformationPublicSerializerV2.prototype['n_mentions'] = undefined;

/**
 * Number of videos rated publicly
 * @member {Number} n_public_videos
 */
PatchedUserInformationPublicSerializerV2.prototype['n_public_videos'] = undefined;

/**
 * @member {String} title_email
 */
PatchedUserInformationPublicSerializerV2.prototype['title_email'] = undefined;

/**
 * E-mails
 * @member {Array.<module:model/PatchedVerifiableEmail>} emails
 */
PatchedUserInformationPublicSerializerV2.prototype['emails'] = undefined;

/**
 * E-mail domain is certified
 * @member {Boolean} is_certified
 */
PatchedUserInformationPublicSerializerV2.prototype['is_certified'] = undefined;

/**
 * Any e-mail domain is rejected
 * @member {Boolean} is_domain_rejected
 */
PatchedUserInformationPublicSerializerV2.prototype['is_domain_rejected'] = undefined;

/**
 * Certified e-mail domain, starting with @
 * @member {String} certified_email_domain
 */
PatchedUserInformationPublicSerializerV2.prototype['certified_email_domain'] = undefined;

/**
 * @member {String} title_degree
 */
PatchedUserInformationPublicSerializerV2.prototype['title_degree'] = undefined;

/**
 * Degrees
 * @member {Array.<module:model/PatchedDegree>} degrees
 */
PatchedUserInformationPublicSerializerV2.prototype['degrees'] = undefined;

/**
 * @member {String} title_expertise
 */
PatchedUserInformationPublicSerializerV2.prototype['title_expertise'] = undefined;

/**
 * Expertises
 * @member {Array.<module:model/PatchedExpertise>} expertises
 */
PatchedUserInformationPublicSerializerV2.prototype['expertises'] = undefined;

/**
 * @member {String} title_expertise_keywords
 */
PatchedUserInformationPublicSerializerV2.prototype['title_expertise_keywords'] = undefined;

/**
 * Expertise keywords
 * @member {Array.<module:model/PatchedExpertiseKeyword>} expertise_keywords
 */
PatchedUserInformationPublicSerializerV2.prototype['expertise_keywords'] = undefined;

/**
 * @member {String} title_demographic
 */
PatchedUserInformationPublicSerializerV2.prototype['title_demographic'] = undefined;

/**
 * Your gender
 * @member {module:model/GenderEnum} gender
 */
PatchedUserInformationPublicSerializerV2.prototype['gender'] = undefined;

/**
 * Year of birth
 * @member {Number} birth_year
 */
PatchedUserInformationPublicSerializerV2.prototype['birth_year'] = undefined;

/**
 * Your country of nationality
 * @member {module:model/NationalityEnum} nationality
 */
PatchedUserInformationPublicSerializerV2.prototype['nationality'] = undefined;

/**
 * Your country of residence
 * @member {module:model/ResidenceEnum} residence
 */
PatchedUserInformationPublicSerializerV2.prototype['residence'] = undefined;

/**
 * Your ethnicity
 * @member {module:model/RaceEnum} race
 */
PatchedUserInformationPublicSerializerV2.prototype['race'] = undefined;

/**
 * Your political preference
 * @member {module:model/PoliticalAffiliationEnum} political_affiliation
 */
PatchedUserInformationPublicSerializerV2.prototype['political_affiliation'] = undefined;

/**
 * Your degree of political engagement
 * @member {module:model/DegreeOfPoliticalEngagementEnum} degree_of_political_engagement
 */
PatchedUserInformationPublicSerializerV2.prototype['degree_of_political_engagement'] = undefined;

/**
 * Your religion
 * @member {module:model/ReligionEnum} religion
 */
PatchedUserInformationPublicSerializerV2.prototype['religion'] = undefined;

/**
 * Your preferred moral philosophy
 * @member {module:model/MoralPhilosophyEnum} moral_philosophy
 */
PatchedUserInformationPublicSerializerV2.prototype['moral_philosophy'] = undefined;

/**
 * @member {String} title_online
 */
PatchedUserInformationPublicSerializerV2.prototype['title_online'] = undefined;

/**
 * Show my online presence on Tournesol
 * @member {Boolean} show_online_presence
 */
PatchedUserInformationPublicSerializerV2.prototype['show_online_presence'] = undefined;

/**
 * Your Google Scholar URL
 * @member {String} google_scholar
 */
PatchedUserInformationPublicSerializerV2.prototype['google_scholar'] = undefined;

/**
 * Your website URL
 * @member {String} website
 */
PatchedUserInformationPublicSerializerV2.prototype['website'] = undefined;

/**
 * Your LinkedIn URL
 * @member {String} linkedin
 */
PatchedUserInformationPublicSerializerV2.prototype['linkedin'] = undefined;

/**
 * Your ORCID URL
 * @member {String} orcid
 */
PatchedUserInformationPublicSerializerV2.prototype['orcid'] = undefined;

/**
 * Your Twitter URL
 * @member {String} twitter
 */
PatchedUserInformationPublicSerializerV2.prototype['twitter'] = undefined;

/**
 * Your Researchgate profile URL
 * @member {String} researchgate
 */
PatchedUserInformationPublicSerializerV2.prototype['researchgate'] = undefined;

/**
 * Your Youtube channel URL
 * @member {String} youtube
 */
PatchedUserInformationPublicSerializerV2.prototype['youtube'] = undefined;






export default PatchedUserInformationPublicSerializerV2;

