/**
 * Copyright (c) 2021-
 * FILE DESCRIPTION
 */

import { parseReactProps } from './web.js';

test('parseReactProps', () => {
  const html = `</div></div><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"cookie":"CookieConsent=true; __Host-next-auth.csrf-token=6c10b095d61e438ff28afda1fff470576f30758a39dbf30517c98c0b90fd829b%7C9b1972a40fcc28711a3d37d7068bfce44c22ab481db6929f459890e0ae567748; __Secure-next-auth.callback-url=https%3A%2F%2Fwww.alphabot.app; cf_clearance=Obr6lPeO51vlvzIAFWnZ7m26KGD2qd_d3.H_E4080ZY-1713021035-1.0.1.1-bRAhwnTZGUj.b3p3yxJESckdGCLoPloFNbQpuT8TMRYsnpOEAf7Y4SrmLcMSDxfHa.KZ0A52LdESco18wX6Byg; _gid=GA1.2.1748489140.1713021123; _ga=GA1.1.944084884.1691163094; _ga_5P3HN827YC=GS1.1.1713025682.7.1.1713025746.0.0.0; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..pl2exvwet_H-WC2T.WF9aueNKDnZ4BR9IW8kMe_2SkURZJv4q_fijlScw7Zs2Wgq_GOF_ePIcXwH5KZlKPivCjNiOaAOEtwi6azYBpOeApUd0M5fwhfjBa34qRfaLHYWaYxdvyv7RGnwKUxbCpO3D_oaanQHzaQzOqvqLKdqCOZ_FzVaT7ccbUQSxIYHRMokszCrgNm478ZGFVrecKm3xG9JBR8fgJgZPf-fcTDrQz0RhdTysAywQMra4oP8bjuGG.gUHfzwyed7m7wD9tdIYIdg","_nextI18Next":{"initialI18nStore":{"en":{"common":{"401":"Please sign with your wallet to perform this functionality","403":"You do not have access to this functionality.","404":"Resource not found","409":"This operation requires Two-Factor authentication to be set up in your user profile","418":"Too many failed attempts. Account is locked and unable to enter raffles. Try again in 30 minutes.","429":"You are doing that too often. Please try again in 5 minutes.","ab_premium_raffles":"Alphabot Premium Raffles","accounts_successfully_merged":"Accounts successfully merged!","active":"Active","ad_ab_premium":"Alphabot Premium","ad_ab_premium_raffles":"Alphabot Premium Raffles","ad_calendar":"Calendar Customization","ad_captcha":"No Captchas or Ads","ad_enter":"Enter","ad_get_it":"Get it today!","ad_reminder":"Advanced Reminders","ada":"Cardano","add":"Add","add_to_calendar":"Add to calendar","add_external":"Add a win for this project that you received from outside of Alphabot.","add_external_win":"Add external win","alpha":"alpha","alphabot":"Alphabot","alphabot_by_apelist":"Alphabot Software Inc","alphabot_premium":"Alphabot Premium Features","alphabot_title":"Alphabot - Alpha Made Easy","announce_to_discord":"Announce Raffle Embed","announcement_success":"Raffle announcement embed sent to bot","announcement_success_winners":"Winners announcement embed sent to bot","app_code":"Invite Code","arb":"Arbitrum","atom":"Cosmos","award_code":"Awarded Code","avax":"Avalanche","invalid_app_code":"Application code invalid","anti_phishing_code":"Anti-phishing code","anti_phishing_code_desc":"Enter this code so you can easily verify that emails you receive from are Alphabot and are not fake phishing attempts.","anti_phishing_code_set":"Anti-phishing code set successfully","apt":"Aptos","are_you_sure":"Are you sure?","base":"Base","beta":"beta","blast":"Blast","blockchain":"Blockchain","bsc":"Binance Smart Chain","btc":"BTC Ordinal","btcs":"BTC Stamps","cancel":"Cancel","cannot_win_twice":"You won a raffle for this project from the same team already.","close":"Close","collab_desc":"{{name}} is open to collab. Click here to get started.","confirm":"Confirm","connect_discord":"Connect Discord","connect_instagram":"Connect Instagram","connect_to_login":"Connect to login","connect_to_mobile":"Connect to mobile","connect_telegram":"Connect Telegram","connect_twitter":"Connect X","connect_wallet":"Connect Wallet","communities":"Communities","communities_settings":"Communities settings","communities_settings_desc":"Setup default behaviors by community when entering raffles.","communities_settings_desc2":"Select the default social media accounts and wallets which will be pre-selected for you when you enter raffles within this community","cookie_consent":"This website uses cookies to enhance the user experience.","copy_link":"Copy link","copy_link_draft":"Copy draft link","copy_addresses":"Copy wallet addresses","copy_data":"Copy spreadsheet data","copy_discord_pings":"Copy Discord pings","copied":"Copied to clipboard","copyright":"Copyright alphabot {{date}}.","cro":"Cronos","crowd_sourced_launch_calendar":"Community sourced launch calendar","danger_zone":"Danger zone","danger_zone_desc":"Manage 2FA or delete your Alphabot account","delete":"Delete","deleted_successfully":"Deleted successfully","delete_desc":"Are you sure you want to delete this raffle?","delete_project":"Delete {{name}}","developer_settings":"Developer settings","developer_settings_desc":"Access your API Key, and set up your webhook. Requires a premium subscription","direct_to_contract":"Direct to contract","disconnect_wallet":"Disconnect wallet","discord":"Discord","discord_url":"Discord url","discord_url_desc":"**Do not use an invite link that will expire, or a vanity url!**\n\nUsing a permanent link will prevent scammers from reusing or hijacking your link and drawing users into the wrong server.","discord_bot_integration":"Discord bot announcements \u0026 daily schedule","discord_rate_limited":"Discord API is being rate limited. Please wait 5 minutes and try again.","discord_req":"Discord requirement","drop_file":"Drop file","duplicate_project":"Duplicate raffle","dup_warning":"This wallet has already been submitted to another Alphabot raffle for this project that you either won, or has not yet completed.","edit":"Edit","egld":"MultiversX","email":"Email","email_address":"Email address","email_desc":"Enter and verify your email to receive email notifications","email_not_verified":"Your email has not been verified. Check your inbox for a verification email from Alphabot, or click here to re-send the verification email.","email_removed":"Email removed successfully","email_verified":"Your email is verified","email_verified_success":"Your email has been successfully verified","ended":"Ended","ends_relative":"Ends \u003c1\u003e{{date}}\u003c/1\u003e","enj":"Enjin","entered":"Entered","enter_code":"Enter code","entries":"Entries","entry_count":"\u003c0\u003e{{entryCount}}\u003c/0\u003e entries","error_404":"Page not found.","error_generic":"An unexpected error occurred. Please try again in a few minutes. {{statusCode}} {{errorCode}}","eth":"Ethereum","export":"Export","extra_entry":"Enter +1","extra_entry_desc":"Alphabot Premium users can get an extra entry by completing the X requirements on raffles!","facebook":"Facebook","fcfs":"First come","fcfs_ended":"Fcfs ended","finalize":"Announce winners","finalized":"Finalized","finalize_to_export":"Announce \u0026 finalize the winners to export data.","follow":"Follow on X","followInsta":"Follow on Instagram","generic_text":"Generic requirement","generic_text_desc":"This requirement allows you to enter markdown to tell users any information related to tasks you would like them to be performed, but may not be available to be checked by Alphabot.","google":"Google","help":"Help","hide":"Hide","home":"Dashboard","icp":"Internet Computer Protocol","include_unvetted":"Include un-vetted projects","include_unvetted_desc":"Warning! Enabling this setting will include projects that have not been approved by the Alphabot data maintenance team. These projects will be visible in the Calendar and Project List pages, and you will receive notifications for them. They will NOT be included in the general public daily Discord project launch announcement.","inj":"Injective","instagram":"Instagram","insta_req":"Instagram requirement","insta_url":"Instagram url","invalid_channel":"Bot could not view a specified channel or it is not a text channel.","invalid_message_type":"An unexpected error occurred","invalid_password":"Invalid password","invalid_project":"Could not find the referenced project.","invalid_team":"Team is invalid","invalid_team_user":"User is not on specified team","invalid_user_permissions":"The bot was unable to announce to Discord. Please ensure the creator of the raffle has connected their Discord account, and the team has the green check mark on the teams page.","loading":"Loading...","lyxe":"Lukso","matic":"Polygon","manage_team":"Manage team","manage_teams":"Manage teams","manta":"Manta Network","membership_cancelled":"Membership was cancelled","membership_cooldown":"Membership was recently activated on another user account. It will become active in {{activatesAt}}.","membership_lapsed":"Your teams membership has lapsed and will need to be renewed before this action can be taken for this raffle.","membership_past_due":"Membership is past due","membership_not_found":"Membership not found","merge_accounts":"Merge accounts","merge_accounts_desc":"Confirm and sign to add a new **{{blockchain}}** wallet to this account:\n\n---\n## **{{address}}**\n\n---\n\nThis wallet will be authorized to sign into Alphabot for your account.\n\n**If this wallet is linked to another account, it will become unlinked and all pending raffle entries from that account will be cancelled.**\n\nContinue?","merge_accounts_err":"You have already signed with this wallet and linked it to this account.\n\n**{{address}}**\n\nIf you wish to link a different wallet, switch to it and connect to this site.","meta_description":"Boost your project's efficiency and security with our highly-customizable, feature-rich raffle system. From the Web to Discord to X, build and engage your community with Alphabot.","metamask":"Metamask","mint_calendar":"Mint calendar","mint_date":"Mint date","mint_future":"Mints on \u003c1\u003e{{mintDate}}\u003c/1\u003e","mint_future_relative":"Mint \u003c1\u003e{{mintDate}}\u003c/1\u003e","mint_past":"Minted on \u003c1\u003e{{mintDate}}\u003c/1\u003e","mint_past_relative":"Minted \u003c1\u003e{{mintDate}}\u003c/1\u003e","mint_address_removed":"{{name}} mint address removed","mint_address_updated":"{{name}} mint address updated","mint_addresses_updated":"{{name}} mint addresses updated","mint_address_singular":"{{name}} mint wallet","mint_address":"{{name}} mint wallets","mint_address_desc":"Enter an optional different wallet address to submit when entering {{name}} raffles as your address for minting. This must be set prior to registration, changing this will not update previous raffle entries. To do that you must cancel registration on that raffle and re-enter. This cannot be done if it is already ended.","mint_wallet":"Wallet:","mint_wallets":"Mint wallets","mint_wallets_desc":"Set up wallets which can be submitted to raffles for giveaways on different blockchains.","mint_wallet_add":"Add {{name}} mint wallet","mint_wallet_missing":"No {{name}} mint wallet set.","mint_wallet_required_profile":"No {{blockchain}} added. Add one in your profile to enter.","missing_access":"The bot was unable to announce to Discord. Please ensure it has View Channel, Send Messages, and Embed Links in the channel it's posting to.","mnt":"Mantle","mobile_connect_1":"To ensure the best possible mobile experience, you should first connect your Discord and X to your wallet alphabot account using a web 3 enabled browser on Mac or PC.","mobile_connect_2":"Scan this QR code with your mobile device to connect your account to a non-web3 enabled mobile browser.","more_options":"More options","mint_wallet_desc":"Select a **{{blockchain}}** mint address to submit to the raffle creator upon entering the raffle.","mint_wallet_desc_eth":"All wallets you have signed and linked to your account will be checked for blockchain requirements.","multiplier_desc":"The 🎟 symbol indicates that this token is a multiplier. This means that for each token you hold in your signed wallet(s), you will receive an additional entry in the raffle.","multiplier_discord_desc":"These roles are multipliers. If you have the specified role(s), you will receive the indicated number of entries, or whichever is highest if you have multiple.","multiplier_discord_stacking_desc":"The 🎟 symbol indicates that the role(s) are stacking.  They will be added to the multiplier received by all other roles.","must_hold_token":"Must hold a {{tokens}} token","must_answer_questions":"You must answer all application questions to enter","must_join_discord":"Join \u003c1\u003e{{label}}\u003c/1\u003e discord","must_join_discord_and_have_role":"Join \u003c1\u003e{{label}}\u003c/1\u003e discord \u0026 have role \u003c3\u003e{{roleName}}\u003c/3\u003e","must_join_discord_and_not_have_role":"In \u003c1\u003e{{label}}\u003c/1\u003e discord, must NOT have role \u003c3\u003e{{roleName}}\u003c/3\u003e","must_like":"\u003c0\u003eLike\u003c/0\u003e \u003c1\u003e@{{username}}'s tweet\u003c/1\u003e","must_like_and_retweet":"\u003c0\u003eLike \u0026 retweet\u003c/0\u003e \u003c1\u003e@{{username}}'s tweet\u003c/1\u003e","must_retweet":"\u003c0\u003eRetweet\u003c/0\u003e \u003c1\u003e@{{username}}'s tweet\u003c/1\u003e","name":"Name","name_mint":"{{name}} Mint","new":"New","new_project":"New raffle","nft_req":"Token requirement","no_dm_message":"An error occurred while attempting to send you a DM on Discord with Alphabot.","no_write_access":"You do not have access to edit this project.","notification_update_success":"Notification updated successfully","notifications":"Notifications","noti_tip_1":"Daily and Minting notifications will be sent for _any_ project which you:\n1) Won a raffle in Alphabot\n2) Added as an **External Win** on the Project List or Calendar page\n3) **Starred** on the Project List or Calendar page.","noti_tip_2":"Discord Direct Message notifications will be sent to your primary Discord account in your Social connections.\n\nPlease ensure you can receive DMs from the bot. The easiest way to do this is to add the bot to a private server where you can safely enable DMs from members.","noti_tip_3":"Collab notifications will be sent when you have configured a team to send you notifications on either requests or offers.\n\n[Visit the team collab page to set up](/team/collabs)","notify_collab":"Collab","notify_daily":"Daily","notify_mint":"Minting","notify_win":"Raffle won","ok":"Ok","okx":"OKX","opensea":"Collection","opensea_url":"Collection url","opportunity_ended":"Opportunity has ended","opportunity_not_started":"Raffle has not started yet","over_allocation":"You cannot give away more spots than the team was allocated.","over_max_entries":"Max entries reached","password":"Password","payment_lapsed":"Payment has expired","payment_lapsed_desc":"Payment for the team has lapsed, and raffle features will be restricted until the team has been paid for. If you are the team owner, please visit https://alphabot.app/team to get set up.","premium_only":"This feature is only available to premium users","premium_req":"Premium Membership Required","premium_req_desc":"Only users with an active premium membership subscription are eligible for this raffle.","previous_winners_excluded":"Winners of previous raffles for this project from this community are not eligible to enter.","project_finalized":"Cannot perform this action on a finalized project.","project_hidden":"Raffle hidden","project_list":"Project list","project_unhidden":"Raffle unhidden","raffle":"Raffle","raffle_list":"Raffles","raffles_made_easy":"Raffles made easy","reconnect":"Reconnect","refresh":"Refresh","refresh_discord":"Please re-connect your Discord account to your Alphabot account","refresh_telegram":"Please re-connect your Telegram account to your Alphabot account","register":"Enter","register_to_verify_requirement":"Click Enter to verify raffle requirements and enter","registered":"Entered","registered_successfully":"Entered successfully","required_eth":"Balance of at least {{requiredEth}}E","required_eth_desc":"The balance required must be present in the mint wallet being submitted.","remove":"Remove","remove_connection":"Remove connection","remove_connection_desc":"Removing this connection from your profile will also remove any existing entries you have in ongoing opportunities.","remove_mint_address":"Remove {{symbol}} mint address?","remove_mint_address_desc":"Are you sure you want to remove {{name}} mint address {{address}}?","removed_address":"Address removed successfully","remove_signed_wallet":"Remove signed wallet","remove_signed_wallet_desc":"This will disconnect **{{address}}** from  your account. This will cancel all pending raffle entries with blockchain requirements, and you will need to re-enter.\n\nContinue?","ron":"Ronin","save":"Save","secure_mobile_connect":"Secure \u0026 seamless mobile connect","sei":"Sei","server_not_found":"The Discord bot was unable to find the required server or channel. Please select the correct channel on the raffle, and Discord server in the team management interface.","setup_wallet":"Setup","sh20":"Shine Chain","show":"Show","show_all":"Show all","show_connections":"Show connections","show_hidden":"Show hidden","short-magicEden":"ME","short-okxwallet":"OKX","sign_in":"Sign in","sign_in_with":"Sign in with...","sign_in_enhanced_desc":"Sign in to the enhanced connection provider to access improved Premium features.","sign_out":"Sign out","sign_wallet":"Wallet requirements","signature_failure":"Invalid signature. Make sure you are signing with a wallet associated to this account.","signed_wallets":"Signed wallets","signed_wallets_desc":"All wallets connected to this account will be checked for blockchain holdings when verifying raffle requirements or elevated access to Alphabot features.","slug_exists":"Vanity url already exists","social_connections":"Connections","social_add_desc":"Add your {{type}} account to your Alphabot account in order to complete {{type}} raffle requirements.","social_add_multiple_desc":"Add another {{type}} account to your Alphabot account. Ensure you switch to the desired account at {{type}} in your browser before clicking this button.","social_default_set":"Set as default {{type}} account","social_default_is_set":"Selected default {{type}} account","social_default_updated":"Default {{type}} account updated successfully","sol":"Solana","sort_ascending":"Sort ascending","sort_by":"Sort by","sort_descending":"Sort descending","star":"Star","starred":"Starred","submit":"Submit","subscription_lapsed":"This raffle cannot be created without a paying subscription. A team on the free plan can only have one active raffle at a time.","subscription_lapsed_entry":"This raffle has reached its maximum entries, as the creator does not have a paying subscription.","sui":"Sui","strk":"Starknet","tasks":"Tasks","team_already_exists":"A team named \"{{teamName}}\" already exists","team_collabs":"Team collabs (Beta)","team_payment_lapsed":"Your team subscription is lapsed, and this function is unavailable until a payment is made at https://alphabot.app/team","telegram":"Telegram","telegram_req":"Telegram requirement","telegram_url":"Telegram url","tia":"Celestia","too_many_failures":"Too many failed attempts. Account is locked and unable to enter raffles. Try again in 30 minutes.","ton":"The Open Network (TON)","twitter":"X","twitter_rate_limited":"X API is being rate limited.  Please wait 5 minutes and try again.","twitter_reconnect":"Please reconnect your X account and try again.","twitter_req":"X requirement","twitter_show_likes":"As your X account is hiding likes, we are unable to check this requirement.","twitter_unauthorized":"Alphabot cannot verify retweet requirements on private or suspended X accounts.","twitter_url":"X url","twitter_rt_follow_validation":"X retweet \u0026 follow validation","two_factor_required":"This operation requires Two-Factor authentication to be set up in your user profile","undo":"Undo","upload":"Upload","user_profile":"User profile","vanity_url_exists":"Vanity url unavailable","vanity_url_length":"Must be more than 3 and less than 100 characters","validation_failed":"One or more tasks incomplete.","validate_discord_server":"Validate Discord server \u0026 role membership","venom":"Venom","verify_nft_holdings":"Verify blockchain holdings with multipliers","verify_email":"Verification email successfully sent to {{email}}.","verify_email_req":"Verified email","wallet_address":"Wallet address","wallet_not_signed":"You must sign to verify wallet ownership.","wallet_req_desc":"Connect the {{name}} wallet and get an extra entry in this raffle! After installation you may need to refresh this page.","wallet_req_desc_2":"You will need to cancel and re-enter to get this bonus.","wrong_wallet":"Please switch your web3 wallet to {{address}} to sign.","whop":"Whop","winnerCount_winner":"\u003c0\u003e{{winnerCount}}\u003c/0\u003e Winner","winnerCount_winners":"\u003c0\u003e{{winnerCount}}\u003c/0\u003e Winners","xrp":"Ripple","you_already_entered":"You already entered","you_have_access":"You have {{name}} access!","you_won":"You won","youtube":"YouTube"},"projectView":{"all_discord_tasks_complete":"All Discord tasks complete!","all_twitter_tasks_complete":"All Twitter tasks complete!","answer_questions":"Application questions","application_code":"Application code","application_code_long":"Enter your application invite code","application_code_long_2":"Enter a new application invite code","application_code_accepted":"Application code accepted!","application_code_invalid":"Application code is invalid or has already been used.","application_rejected":"Your previous application was rejected","application_submitted_1":"Your application has been submitted.","application_submitted_2":"A team member of **{{teamName}}** will review your application soon. Good luck!","award_code_win":"You won an invite code:","blockchain_value":"Blockchain: {{name}}","cancel_registration":"Cancel registration","cancel_registration_confirm":"Cancel {{type}} registration?","cancel_submission":"Undo submission","created_by":"Created by \u003c1\u003e{{u}}\u003c/1\u003e \u003c2\u003e{{creatorName}}\u003c/2\u003e from \u003c4\u003e{{teamName}}\u003c/4\u003e on \u003c6\u003e{{createdDate}}\u003c/6\u003e, end \u003c8\u003e{{endDate}}\u003c/8\u003e","discord_connection_desc":"Select the Discord account from those you have connnected which will fulfill any following Discord requirement(s)","discord_invalid":"Discord tasks incomplete","dtc_info":"Wallets will be added direct to contract","enter_code":"Enter code...","entry_count_singular":"\u003c0\u003e1\u003c/0\u003e entry","entry_count_plural":"\u003c0\u003e{{entryCount}}x\u003c/0\u003e entries","entry_count_desc":"The number of your entries for this raffle. Note: this value will be re-evaluated for Discord and NFT requirements when the raffle is drawn, so if you add or remove tokens before then, your changed number of entries will be reflected at that time.","insta_connection_desc":"Select the Instagram account from those you have connnected which will fulfill any following Instagram requirement(s)","mint":"Mint","next_question":"Next question","nft_not_eligible":"One or more NFTs are ineligible for entry having been used already.","password_desc":"Custom password is set by the host of the raffle. Check with the team or read the raffle description for details.","price_value":"Price \u003c1\u003e{{value}}\u003c/1\u003e","public_price_value":"Public \u003c1\u003e{{value}}\u003c/1\u003e","presale_price_value":"WL \u003c1\u003e{{value}}\u003c/1\u003e","question_num":"Question {{i}}","raffle_is_over":"Raffle is over, and winners have been announced.","raffle_is_ended":"Raffle is over, but has not yet been finalized. Winners will be announced soon.","resend_email":"Send winner email","resend_success":"Winner email resent successfully","sign_in_to_apply":"You must sign in to apply","submitted_address":"You submitted: \u003c1\u003e{{address}}\u003c/1\u003e","supply_value":"Supply \u003c1\u003e{{value}}\u003c/1\u003e","tasks_incomplete":"Tasks incomplete","telegram_connection_desc":"Select the Telegram account from those you have connnected which will fulfill any following Telegram requirement(s)","too_many_tries":"You are doing that too often. Please try again in 5 minutes.","tweet_register_text_application":"I just submitted an application to @{{projectUser}} on @AlphabotApp!","tweet_register_text_application_2":" Thanks @{{teamUser}} 🙏","tweet_register_text_with_team_with_project":"🤞 I just entered a giveaway for @{{projectUser}} from @{{teamUser}} on #Alphabot","tweet_register_text_with_team_without_project":"🤞 I just entered a giveaway for {{projectName}} from @{{teamUser}} on #Alphabot","tweet_register_text_without_team_with_project":"🤞 I just entered a giveaway for @{{projectUser}} from {{teamName}} on #Alphabot","tweet_register_text_without_team_without_project":"🤞 I just entered a giveaway for {{projectName}} from {{teamName}} on #Alphabot","tweet_collected_text_with_team_with_project":"💪 I submitted my wallet for @{{projectUser}} from @{{teamUser}} on #Alphabot","tweet_collected_text_with_team_without_project":"💪 I submitted my wallet for {{projectName}} from @{{teamUser}} on #Alphabot","tweet_collected_text_without_team_with_project":"💪 I submitted my wallet for @{{projectUser}} from {{teamName}} on #Alphabot","tweet_collected_text_without_team_without_project":"💪 I submitted my wallet for {{projectName}} from {{teamName}} on #Alphabot","tweet_register_suffix":"\n\n🙏 @AlphabotApp send me your energy ༼ つ ◕_◕ ༽つ 🙏\n\n","tweet":"Tweet","tweet_your_win":"Tweet your win!","tweet_win_text_application":"My application for @{{projectUser}} was just accepted on @AlphabotApp!","tweet_win_text_application_2":" Thanks @{{teamUser}} ❤️","tweet_win_text_with_team_with_project":"I just won a giveaway for @{{projectUser}} from @{{teamUser}} on @AlphabotApp!","tweet_win_text_with_team_without_project":"I just won a giveaway for {{projectName}} from @{{teamUser}} on @AlphabotApp!","tweet_win_text_without_team_with_project":"I just won a giveaway for @{{projectUser}} from {{teamName}} on @AlphabotApp!","tweet_win_text_without_team_without_project":"I just won a giveaway for {{projectName}} from {{teamName}} on @AlphabotApp!","tweet_win_suffix":"\n\n🎉 LFG #Alphabot 🎉\n\n","tweet_collected_suffix":"\n\n🎉 LFG #Alphabot 🎉\n\n","twitter_connection_desc":"Select the Twitter account from those you have connnected which will fulfill any following Twitter requirement(s)","twitter_invalid":"Twitter tasks incomplete","unregistered_successfully":"Registration cancelled successfully","wallet":"Wallet","wallet_submitted":"Your wallet was submitted successfully","winners_soon":"You are registered, and the raffle has ended. Winners will be announced soon.","winner_info_check":"Check this when you have completed any additional tasks required. This is a simple reminder for you that will update the icon shown on the raffle list.","you_have_invites":"You have unused invite codes, invite your friends to apply!","you_were_selected":"Your application was approved! Congratulations","your_answer":"Your answer","youre_a_winner":"**You won!**\nCongratulations","youre_not_a_winner":"You're not a winner. Maybe next time!"}}},"initialLocale":"en","ns":["common","projectView"],"userConfig":{"i18n":{"defaultLocale":"en","locales":["en"]},"default":{"i18n":{"defaultLocale":"en","locales":["en"]}}}},"project":{"_id":"661ab22cdd90eb7e3cb9ad78","avatarImageUrl":"https://i.imgur.com/1C4QiRO.jpeg","awardCodes":[],"bannerImageUrl":"https://i.imgur.com/ztEIony.png","blockchain":"BTC","botAnnounceChannel":"1073274262162509824","botReminderChannel":"1098137164589584444","botWinnersChannel":"1073272462671888464","collabId":null,"colors":[],"connectBot":true,"connectCaptcha":false,"connectDiscord":true,"connectEmail":false,"connectInstagram":false,"connectPassword":false,"connectTelegram":false,"connectTwitter":true,"connectUrl":false,"connectWallet":true,"createRoleColor":"#CCCCCC","createdDate":1713025580000,"dataId":"660edddb9ddcd12ac1aa3ecf","denyPremiumExtraEntry":false,"description":"**Runic Remnants x HELLOBOT**\n\nThe Remnants, an ancient and powerful civilization, once wielded incredible arcane abilities. As their civilization began to collapse, they channeled their remaining power into mysterious Runestones ᛤ as a way to preserve their legacy.\nThese Runestones, imbued with the Remnants' timeless power, have now been UNCOVERED once more. Brave explorers are being called upon to join a hallowed crusade and uncover the long-hidden secrets of the Remnants through these resurfaced artifacts.\nThe holders of the Runestone ᛤ are being granted exclusive, privileged access to embark on this historic mission and harness the power contained within. With the help of wider community, we hope to unearth these lost relics faster. Brave explorers are being called upon to join a hallowed crusade and uncover the long-hidden secrets of the Remnants through these resurfaced artifacts. Join our sacred crusade to resurrect the Remnants! \n\nOfficial Links\nLinks: https://twitter.com/RunicRemnants\n\nMint Info\n- Chain - Ordinal\n- Supply - 1124\n- Mint Price - TBA\n- Date - April 2024\n- DTC\n","discordServerId":"1019885116698406982","discordServerRoles":[{"id":"1019885116698406982","icon":"https://cdn.discordapp.com/icons/1019885116698406982/cc30de4970368f2dd0f9f2c0823415d7.png","hasAlphabot":true,"label":"Hellobot Universe Official","roles":[{"roleId":"1101415782036021288","name":"10+","val":5,"stacking":false},{"roleId":"1101415849996328970","name":"20+","val":10,"stacking":false},{"roleId":"1101415962537885707","name":"H30+","val":30,"stacking":false},{"roleId":"1131579651144290366","name":"H100+","val":70,"stacking":false},{"roleId":"1095973553934958622","name":"Nori mate","val":1,"stacking":false}]}],"discordUrl":"","dtc":true,"endDate":1713196779392,"excludePreviousWinners":true,"hasEntry":true,"hideEntries":true,"hideProjectPfp":false,"hideTeamPfp":false,"instagramFollows":[],"isProjectTeam":false,"name":"Hellobot X Runic Remnants(GTD) - Holders","picked":0,"picking":0,"ping":"everyone","pingRoleId":"","publicWinnerInfo":"","questions":[],"repicks":0,"reqString":"dflrt","requirePremium":false,"requiredEth":0,"requiredTokens":[{"address":"","isMultiplier":false,"lastBlock":0,"firstBlock":9007199254740991}],"signWallet":false,"slug":"hellobot-x-runic-remnantsgtd-holders-ue8np2","source":"website","startDate":1713023979392,"status":"active","teamId":"63e85c80e7cce7dc13ad63f3","telegramChatRequirements":[{}],"templateId":null,"twitterFollows":[{"_id":"64b88718ec4e6ca3c6b140b0","id":"1585170424496721921","banner":"https://pbs.twimg.com/profile_banners/1585170424496721921/1679491629","followerCount":73718,"image":"https://pbs.twimg.com/profile_images/1610579138355814405/11fJAH27_normal.jpg","inserted":1689814808241,"name":"hellobot_nft","updated":1689814808241},{"_id":"64cf1c046e1699e6a3335efa","id":"1392053866091278338","banner":"https://pbs.twimg.com/profile_banners/1392053866091278338/1678695867","followerCount":38003,"image":"https://pbs.twimg.com/profile_images/1671521865024634882/ynEukYmi_normal.jpg","inserted":1691294724756,"name":"willy_eth","updated":1691294724756},{"id":"1771348942426451968","name":"runicremnants","image":"https://i.imgur.com/1C4QiRO.jpeg"}],"twitterId":"1771348942426451968","twitterRetweet":"https://x.com/RunicRemnants/status/1778847656946594103","twitterRetweetType":"both","twitterUrl":"https://twitter.com/runicremnants","type":"raffle","uid":"62fc875316475182fd89a3bf","updatedDate":1713025801507,"visibility":0,"winnerCount":1,"instagramUrl":null,"mintDateHasTime":false,"supply":"1124","telegramUrl":null,"isRegistered":false,"alphaTeam":{"_id":"63e85c80e7cce7dc13ad63f3","name":"Hellobot Universe Official","hoverImageUrl":"","imageUrl":"https://pbs.twimg.com/profile_images/1610579138355814405/11fJAH27_normal.jpg","twitterUser":{"id":"1585170424496721921","name":"hellobot_NFT","image":"https://pbs.twimg.com/profile_images/1610579138355814405/11fJAH27_normal.jpg"},"status":"active","ownerOwnsServer":true,"ownerOwnsServerTg":false,"discordServer":{"id":"1019885116698406982","icon":"https://cdn.discordapp.com/icons/1019885116698406982/cc30de4970368f2dd0f9f2c0823415d7.png","hasAlphabot":true,"label":"Hellobot Universe Official"},"twitterVerified":true,"isStarred":false},"isWriteAccess":false,"creatorUsers":[{"address":"0xd9b5a30cf69ffe4beafe9ec466d76ee5a7966c80","connections":[{"id":"1506937121625550850","name":"queen456_NFTs","image":"https://unavatar.io/twitter/queen456_NFTs","provider":"twitter"},{"id":"1514743095123869698","name":"ALAYNA_NFTs","image":"https://pbs.twimg.com/profile_images/1618207920939843584/QjqEfdA1.jpg","provider":"twitter"},{"id":"914994815144435772","name":"ALAYNA","image":"https://cdn.discordapp.com/avatars/914994815144435772/ce0ecb275c0446346252c12633ec7927.png","provider":"discord","profile":{"id":"914994815144435772","username":"alayna5783","avatar":"ce0ecb275c0446346252c12633ec7927","discriminator":"0","public_flags":64,"premium_type":2,"flags":64,"banner":null,"accent_color":988426,"global_name":"ALAYNA","avatar_decoration_data":null,"banner_color":"#0f150a","mfa_enabled":true,"locale":"en-US","image_url":"https://cdn.discordapp.com/avatars/914994815144435772/ce0ecb275c0446346252c12633ec7927.png"}},{"id":"user_2R4ydcuAfJyTI","name":"feyin","social_accounts":[],"authorized_user":null,"image":"https://ui-avatars.com/api/?name=feyin\u0026background=535961\u0026color=fff","provider":"whop","profile":{"id":"user_2R4ydcuAfJyTI","name":null,"username":"feyin","email":"feyin3390@gmail.com","profile_pic_url":"https://ui-avatars.com/api/?name=feyin\u0026background=535961\u0026color=fff","social_accounts":[],"authorized_user":null}}],"ensName":""}],"isFinalized":false,"isWinner":false,"isWinConfirmed":false,"isLost":false,"isPending":false,"isUnregistered":true,"isPendingConfirm":false,"invites":[],"projectData":{"_id":"660edddb9ddcd12ac1aa3ecf","name":"Runic Remnants","discordUrl":"","twitterUrl":"https://twitter.com/runicremnants","osUrl":"","supply":"1124","hasTime":false,"blockchain":"BTC","denied":false,"vetted":false,"twitterId":"1771348942426451968","instagramUrl":null,"mintDate":null,"pubPrice":null,"telegramUrl":null,"twitterBannerImage":"https://i.imgur.com/ztEIony.png","twitterProfileImage":"https://i.imgur.com/1C4QiRO.jpeg","wlPrice":null,"twitterBannerStored":"https://i.imgur.com/ztEIony.png","isStarred":false,"id":"660edddb9ddcd12ac1aa3ecf"}},"statusCode":false,"metaImage":null},"__N_SSP":true},"page":"/[slug]","query":{"slug":"hellobot-x-runic-remnantsgtd-holders-ue8np2"},"buildId":"ir9Q0IHLtmHuO0a6H07xC","isFallback":false,"isExperimentalCompile":false,"gssp":true,"appGip":true,"locale":"en","locales":["en"],"defaultLocale":"en","scriptLoader":[]}</script><script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="7fcb80e4322742e328ca1776-|49" defer></script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"873cdcea3b9115ec","version":"2024.3.0","token":"b977aa7f3e4942bbb3d5719ad5ff52c0"}' crossorigin="anonymous"></script>
</body><script async src="https://telegram.org/js/telegram-widget.js" type="7fcb80e4322742e328ca1776-text/javascript"></script><script defer src="/t.js" type="7fcb80e4322742e328ca1776-text/javascript"></script><script type="7fcb80e4322742e328ca1776-text/javascript" src="//translate.google.com/translate_a/element.js?cb=initGT" defer></script><script type="7fcb80e4322742e328ca1776-text/javascript">function initGT(){new google.translate.TranslateElement({pageLanguage:'en'},'inject-lang')}</script></html></body></html>
`;
  parseReactProps(html);
});